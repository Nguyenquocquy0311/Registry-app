package com.example.polls.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "xe")
public class Xe implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;

    @Column(name = "maso")
    private String maso;

    @Column(name = "namsanxuat")
    private Integer namsanxuat;

    @Column(name = "ngaycap")
    @Temporal(TemporalType.DATE)
    private Date ngaycap;

    @Column(name = "biendangky")
    private String biendangky;

    @Column(name = "noidangky")
    private String noidangky;

    @JoinColumn(name = "id_phienbanxe", referencedColumnName = "id")
    @ManyToOne
    private PhienBanXe phienbanxe;

    @JoinColumn(name = "id_mucdich", referencedColumnName = "id")
    @ManyToOne
    private MucDich mucDich;

    @JoinColumn(name = "id_kieuxe", referencedColumnName = "id")
    @ManyToOne
    private KieuXe kieuXe;



    @JoinColumn(name = "id_chusohuu", referencedColumnName = "id")
    @ManyToOne
    private ChuSoHuu chuSoHuu;

    public Xe() {
    }

    public Xe(Integer id, String maso, Integer namsanxuat, Date ngaycap, String biendangky, String noidangky, PhienBanXe phienbanxe, MucDich mucDich, KieuXe kieuXe, ChuSoHuu chuSoHuu) {
        this.id = id;
        this.maso = maso;
        this.namsanxuat = namsanxuat;
        this.ngaycap = ngaycap;
        this.biendangky = biendangky;
        this.noidangky = noidangky;
        this.phienbanxe = phienbanxe;
        this.mucDich = mucDich;
        this.kieuXe = kieuXe;
        this.chuSoHuu = chuSoHuu;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getMaso() {
        return maso;
    }

    public void setMaso(String maso) {
        this.maso = maso;
    }

    public Integer getNamsanxuat() {
        return namsanxuat;
    }

    public void setNamsanxuat(Integer namsanxuat) {
        this.namsanxuat = namsanxuat;
    }

    public Date getNgaycap() {
        return ngaycap;
    }

    public void setNgaycap(Date ngaycap) {
        this.ngaycap = ngaycap;
    }

    public String getBiendangky() {
        return biendangky;
    }

    public void setBiendangky(String biendangky) {
        this.biendangky = biendangky;
    }

    public String getNoidangky() {
        return noidangky;
    }

    public void setNoidangky(String noidangky) {
        this.noidangky = noidangky;
    }

    public PhienBanXe getPhienbanxe() {
        return phienbanxe;
    }

    public void setPhienbanxe(PhienBanXe phienbanxe) {
        this.phienbanxe = phienbanxe;
    }

    public MucDich getMucDich() {
        return mucDich;
    }

    public void setMucDich(MucDich mucDich) {
        this.mucDich = mucDich;
    }

    public KieuXe getKieuXe() {
        return kieuXe;
    }

    public void setKieuXe(KieuXe kieuXe) {
        this.kieuXe = kieuXe;
    }

    public ChuSoHuu getChuSoHuu() {
        return chuSoHuu;
    }

    public void setChuSoHuu(ChuSoHuu chuSoHuu) {
        this.chuSoHuu = chuSoHuu;
    }
}
