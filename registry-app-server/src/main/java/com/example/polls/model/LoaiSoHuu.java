package com.example.polls.model;

import javax.persistence.*;
import java.io.Serializable;


@Entity
@Table(name = "loaisohuu")
public class LoaiSoHuu implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;

    @Column(name = "loaisohuu")
    private String loaisohuu;

    public LoaiSoHuu() {
    }

    public LoaiSoHuu(Integer id, String loaisohuu) {
        this.id = id;
        this.loaisohuu = loaisohuu;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLoaisohuu() {
        return loaisohuu;
    }

    public void setLoaisohuu(String loaisohuu) {
        this.loaisohuu = loaisohuu;
    }
}
