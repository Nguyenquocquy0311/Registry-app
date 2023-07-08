package com.example.polls.repository;


import com.example.polls.model.sinhvien;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface sinhvienRepository extends JpaRepository<sinhvien, Integer>, JpaSpecificationExecutor<sinhvien> {
    @Query(value = "SELECT id, gioitinh, hoten, malop, masv, ngaysinh, quequan\n" +
            "\tFROM public.sinhvien;", nativeQuery = true)
    List<sinhvien> findAllsinhvien();

//    @Query(value = "SELECT id, gioitinh, hoten, malop, masv, ngaysinh, quequan\n" +
//            "\tFROM public.sinhvien where id = :id;", nativeQuery = true)
//    sinhvien findById(@Param("id"));
}


