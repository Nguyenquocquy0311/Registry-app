package com.example.polls.controller;


import com.example.polls.model.sinhvien;
import com.example.polls.repository.sinhvienRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = {"http://localhost:8080", "http://10.168.1.196:8080"})
@RestController
@RequestMapping("")
public class sinhvienController {

    @Autowired
    sinhvienRepository sinhvienRepository;

    @GetMapping("/students")
    public ResponseEntity<List<sinhvien>> getAllsinhviens() {
        try {
            List<sinhvien> sinhvien = sinhvienRepository.findAllsinhvien();

            if (sinhvien.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(sinhvien, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/student/{id}")
    public ResponseEntity<sinhvien> sinhvien(@PathVariable("id") Integer id ){
        Optional<sinhvien> sinhvienData = sinhvienRepository.findById(id);

        if (sinhvienData.isPresent()) {
            return new ResponseEntity<>(sinhvienData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/student")
    public ResponseEntity<sinhvien> createsinhvien(@RequestBody sinhvien doanhnghiep) {
        try {
            sinhvien sinhvien = sinhvienRepository.save(doanhnghiep);

            return new ResponseEntity<>(sinhvien, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/student/{id}")
    public ResponseEntity<sinhvien> putsinhvien(@RequestBody sinhvien _sinhvien,@PathVariable("id") Integer id ) {
            Optional<sinhvien> sinhvienData = sinhvienRepository.findById(id);
            if(sinhvienData.isPresent()){
                sinhvien sinhvien = sinhvienData.get();
                Integer oldId = sinhvien.getId();
                sinhvien = _sinhvien;
                sinhvien.setId(oldId);
                return new ResponseEntity<>(sinhvienRepository.save(sinhvien), HttpStatus.CREATED);
            }
            else{
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
    }

    @DeleteMapping("/student/{id}")
    public ResponseEntity<sinhvien> deletesinhvien(@PathVariable("id") Integer id ) {
        try {
            sinhvienRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



}
