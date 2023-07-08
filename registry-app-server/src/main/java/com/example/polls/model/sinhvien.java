package com.example.polls.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "sinhvien")
public class sinhvien implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;

    @Column(name = "masv")
    private Integer masv;

    @Column(name = "hoten")
    private String hoten;

    @Column(name = "quequan")
    private String quequan;

    @Column(name = "malop")
    private Integer malop;

    @Column(name = "ngaysinh")
    @Temporal(TemporalType.DATE)
    private Date ngaysinh;

    @Column(name = "gioitinh")
    private String gioitinh;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getMasv() {
        return masv;
    }

    public void setMasv(Integer masv) {
        this.masv = masv;
    }

    public String getHoten() {
        return hoten;
    }

    public void setHoten(String hoten) {
        this.hoten = hoten;
    }

    public String getQuequan() {
        return quequan;
    }

    public void setQuequan(String quequan) {
        this.quequan = quequan;
    }

    public Integer getMalop() {
        return malop;
    }

    public void setMalop(Integer malop) {
        this.malop = malop;
    }

    public Date getNgaysinh() {
        return ngaysinh;
    }

    public void setNgaysinh(Date ngaysinh) {
        this.ngaysinh = ngaysinh;
    }

    public String getGioitinh() {
        return gioitinh;
    }

    public void setGioitinh(String gioitinh) {
        this.gioitinh = gioitinh;
    }

    public sinhvien(Integer id, Integer masv, String hoten, String quequan, Integer malop, Date ngaysinh, String gioitinh) {
        this.id = id;
        this.masv = masv;
        this.hoten = hoten;
        this.quequan = quequan;
        this.malop = malop;
        this.ngaysinh = ngaysinh;
        this.gioitinh = gioitinh;
    }

    public sinhvien() {
    }
}