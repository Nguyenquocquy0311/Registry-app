package com.example.polls.repository;

import com.example.polls.model.ThongTinDangKiem;
import com.example.polls.model.sinhvien;
import net.bytebuddy.implementation.bytecode.Throw;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ThongtindangkiemRepository  extends JpaRepository<ThongTinDangKiem, Integer>, JpaSpecificationExecutor<ThongTinDangKiem> {
    @Query(value = "SELECT id, maso, ngaycap, ngayhethan, id_trungtamdangkiem, id_xe\n" +
            "\tFROM public.thongtindangkiem;", nativeQuery = true)
    List<ThongTinDangKiem> findAllthongtindangkiem();



    @Query(value = "SELECT id, maso, ngaycap, ngayhethan, id_trungtamdangkiem, id_xe\n" +
            "    FROM public.thongtindangkiem where ( EXTRACT(MONTH FROM ngaycap)=  :month) " +
            " and   ( EXTRACT(YEAR FROM ngaycap)=  :year) ;", nativeQuery = true)
    List<ThongTinDangKiem> findbyMonth(@Param("month") Integer month, @Param("year") Integer year);


    @Query(value = "SELECT id, maso, ngaycap, ngayhethan, id_trungtamdangkiem, id_xe\n" +
            "    FROM public.thongtindangkiem where ( EXTRACT(YEAR FROM ngaycap)=  :year) ;", nativeQuery = true)
    List<ThongTinDangKiem> findbyYear( @Param("year") Integer year);




    @Query(value = "SELECT id, maso, ngaycap, ngayhethan, id_trungtamdangkiem, id_xe\n" +
            "\tFROM public.thongtindangkiem where id_trungtamdangkiem = :id", nativeQuery = true)
    List<ThongTinDangKiem> findByTTDK( @Param("id") Integer id);


    @Query(value = "SELECT id, maso, ngaycap, ngayhethan, id_trungtamdangkiem, id_xe\n" +
            "               FROM public.thongtindangkiem where  ( EXTRACT(MONTH FROM ngaycap)>= :month1)\n" +
            "            and ( EXTRACT(MONTH FROM ngaycap)<= :month2)\n" +
            "            and ( EXTRACT(YEAR FROM ngaycap)=  :year) ;", nativeQuery = true)
        List<ThongTinDangKiem> findbyQuy(@Param("month1") Integer month1,@Param("month2") Integer month2, @Param("year") Integer year);



    @Query(value = "SELECT id, maso, ngaycap, ngayhethan, id_trungtamdangkiem, id_xe\n" +
            "    FROM public.thongtindangkiem where ( EXTRACT(MONTH FROM ngayhethan)=  :month) " +
            " and   ( EXTRACT(YEAR FROM ngayhethan)=  :year) ;", nativeQuery = true)
    List<ThongTinDangKiem> findendbyMonth(@Param("month") Integer month, @Param("year") Integer year);



}



