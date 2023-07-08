package com.example.polls.model;

import javax.persistence.*;

@Entity
@Table(name = "phienbanxe")
public class PhienBanXe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;

    @Column(name = "tenphienban")
    private String tenphienban;

    @JoinColumn(name = "id_hangxe", referencedColumnName = "id")
    @ManyToOne
    private HangXe hangXe;

    public PhienBanXe() {
    }

    public PhienBanXe(Integer id, String tenphienban, HangXe hangXe) {
        this.id = id;
        this.tenphienban = tenphienban;
        this.hangXe = hangXe;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTenphienban() {
        return tenphienban;
    }

    public void setTenphienban(String tenphienban) {
        this.tenphienban = tenphienban;
    }

    public HangXe getHangXe() {
        return hangXe;
    }

    public void setHangXe(HangXe hangXe) {
        this.hangXe = hangXe;
    }
}
