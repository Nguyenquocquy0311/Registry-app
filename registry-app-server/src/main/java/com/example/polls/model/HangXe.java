package com.example.polls.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "hangxe")
public class HangXe implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;

    @Column(name = "tenhang")
    private String tenhang;



    public HangXe() {
    }

    public HangXe(Integer id, String tenhang) {
        this.id = id;
        this.tenhang = tenhang;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTenhang() {
        return tenhang;
    }

    public void setTenhang(String tenhang) {
        this.tenhang = tenhang;
    }
}
