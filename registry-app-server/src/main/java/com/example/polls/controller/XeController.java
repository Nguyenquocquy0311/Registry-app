package com.example.polls.controller;


import com.example.polls.model.Xe;
import com.example.polls.repository.XeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = {"http://localhost:5500", "http://10.168.1.196:8080"})
@RestController
@RequestMapping("/everyone")
public class XeController {
    @Autowired
    XeRepository xeRepository;

    @GetMapping("/xe")
    public ResponseEntity<List<Xe>> getAllXes() {
        try {
            List<Xe> Xe = xeRepository.findAllxe();

            if (Xe.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(Xe, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/xe/{id}")
    public ResponseEntity<Xe> getXebyID(@PathVariable("id")  Integer id) {
        try {
            Optional<Xe> Xe = xeRepository.findById(id);

            if (Xe.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(Xe.get(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @PutMapping("/xe/{id}")
    public ResponseEntity<Xe> editTblxe(@PathVariable("id")  Integer id,@RequestBody Xe xe) {
        Optional<Xe> Xe = xeRepository.findById(id);
        if (Xe.isPresent()) {
            Xe _xe =Xe.get();
            _xe.setMaso(xe.getMaso());
            _xe.setNamsanxuat(xe.getNamsanxuat());
            _xe.setNgaycap(xe.getNgaycap());
            _xe.setBiendangky(xe.getBiendangky());
            _xe.setNoidangky(xe.getNoidangky());
            _xe.setPhienbanxe(xe.getPhienbanxe());
            _xe.setMucDich(xe.getMucDich());
            _xe.setKieuXe(xe.getKieuXe());
            _xe.setChuSoHuu(xe.getChuSoHuu());
            return new ResponseEntity<>(xeRepository.save(_xe), HttpStatus.OK);

        }else{
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }



    @PostMapping("/xe")
    public ResponseEntity<Xe> createTblxe(@RequestBody Xe xe) {

        try {
            if (xe.getPhienbanxe() == null) {
                xe.setPhienbanxe(null);
            }
            if (xe.getMucDich() == null) {
                xe.setMucDich(null);
            }
            if (xe.getKieuXe() == null) {
                xe.setKieuXe(null);
            }
            if (xe.getChuSoHuu() == null) {
                xe.setChuSoHuu(null);
            }
            Xe _xe = xeRepository
                    .save(xe);
            return new ResponseEntity<>(xe, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }



    }
}
