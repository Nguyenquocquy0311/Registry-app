package com.example.polls.repository;

import com.example.polls.model.ThongTinDangKiem;
import com.example.polls.model.Xe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface XeRepository extends JpaRepository<Xe,Integer> , JpaSpecificationExecutor<Xe> {
    @Query(value = "SELECT id, biendangky, maso, ngaycap, noidangky, id_chusohuu, id_kieuxe, id_mucdich, id_phienbanxe, namsanxuat\n" +
            "\tFROM public.xe;", nativeQuery = true)
    List<Xe> findAllxe();
}

