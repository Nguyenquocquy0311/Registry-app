package com.example.polls.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "kieuxe")
public class KieuXe implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;

    @Column(name = "tenkieu")
    private String tenkieu;



    public KieuXe() {
    }

    public KieuXe(Integer id, String tenkieu) {
        this.id = id;
        this.tenkieu = tenkieu;

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTenkieu() {
        return tenkieu;
    }

    public void setTenkieu(String tenkieu) {
        this.tenkieu = tenkieu;
    }


}
