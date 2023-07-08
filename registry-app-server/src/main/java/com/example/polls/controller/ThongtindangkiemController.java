package com.example.polls.controller;


import com.example.polls.model.ThongTinDangKiem;
import com.example.polls.model.sinhvien;
import com.example.polls.repository.ThongtindangkiemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:8080", "http://10.168.1.196:8080"})
@RestController
@RequestMapping("/everyone")
public class ThongtindangkiemController {

    @Autowired
    ThongtindangkiemRepository thongtindangkiemRepository;

    @GetMapping("/thongtindangkiems")
    public ResponseEntity<List<ThongTinDangKiem>> getAllsinhviens() {
        try {
            List<ThongTinDangKiem> ThongTinDangKiem = thongtindangkiemRepository.findAllthongtindangkiem();

            if (ThongTinDangKiem.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(ThongTinDangKiem, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/thongtindangkiem/findByttdk/{id}")
    public ResponseEntity<List<ThongTinDangKiem>> getAllsinhviens(@PathVariable Integer id) {
        System.out.println("/???");
        try {
            List<ThongTinDangKiem> ThongTinDangKiem = thongtindangkiemRepository.findByTTDK(id);
            System.out.println(id);
            System.out.println(ThongTinDangKiem.size());
            if (ThongTinDangKiem.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(ThongTinDangKiem, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }




    @GetMapping("/thongtindangkiem/bymonth/{month}/{year}")
    public ResponseEntity<List<ThongTinDangKiem>> getAllthongtinByMonth(@PathVariable Integer month,@PathVariable Integer year ) {
        try {
            List<ThongTinDangKiem> ThongTinDangKiem = thongtindangkiemRepository.findbyMonth(month,year);

            if (ThongTinDangKiem.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(ThongTinDangKiem, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/thongtindangkiem/byyear/{year}")
    public ResponseEntity<List<ThongTinDangKiem>> getAllthongtinByYear(@PathVariable Integer year ) {
        try {
            List<ThongTinDangKiem> ThongTinDangKiem = thongtindangkiemRepository.findbyYear(year);

            if (ThongTinDangKiem.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(ThongTinDangKiem, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/thongtindangkiem/byquy/{month1}/{month2}/{year}")
    public ResponseEntity<List<ThongTinDangKiem>> getAllthongtinByQuy(@PathVariable Integer month1,@PathVariable Integer month2,@PathVariable Integer year ) {
        try {
            List<ThongTinDangKiem> ThongTinDangKiem = thongtindangkiemRepository.findbyQuy(month1,month2,year);

            if (ThongTinDangKiem.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(ThongTinDangKiem, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/thongtindangkiem/endbymonth/{month}/{year}")
    public ResponseEntity<List<ThongTinDangKiem>> getAllthongtinendByMonth(@PathVariable Integer month,@PathVariable Integer year ) {
        try {
            List<ThongTinDangKiem> ThongTinDangKiem = thongtindangkiemRepository.findendbyMonth(month,year);

            if (ThongTinDangKiem.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(ThongTinDangKiem, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
