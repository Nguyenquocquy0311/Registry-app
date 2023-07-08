package com.example.polls.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "chusohuu")
public class ChuSoHuu implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;

    @JoinColumn(name = "id_sohuu", referencedColumnName = "id")
    @ManyToOne
    private LoaiSoHuu loaiSoHuu;

    @Column(name = "ten")
    private String ten;

    @Column(name = "tinhthanh")
    private String tinhthanh;

    @Column(name = "khuvuccutru")
    private String khuvuccutru;

    public ChuSoHuu() {
    }

    public ChuSoHuu(Integer id, LoaiSoHuu loaiSoHuu, String ten, String tinhthanh, String khuvuccutru) {
        this.id = id;
        this.loaiSoHuu = loaiSoHuu;
        this.ten = ten;
        this.tinhthanh = tinhthanh;
        this.khuvuccutru = khuvuccutru;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public LoaiSoHuu getLoaiSoHuu() {
        return loaiSoHuu;
    }

    public void setLoaiSoHuu(LoaiSoHuu loaiSoHuu) {
        this.loaiSoHuu = loaiSoHuu;
    }

    public String getTen() {
        return ten;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    public String getTinhthanh() {
        return tinhthanh;
    }

    public void setTinhthanh(String tinhthanh) {
        this.tinhthanh = tinhthanh;
    }

    public String getKhuvuccutru() {
        return khuvuccutru;
    }

    public void setKhuvuccutru(String khuvuccutru) {
        this.khuvuccutru = khuvuccutru;
    }
}
