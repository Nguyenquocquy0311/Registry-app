package com.example.polls.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "cucdangkiem")
public class Cucdangkiem implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;

    @Column(name = "tencuc")
    private String tencuc;

    public Cucdangkiem(Integer id, String tencuc) {
        this.id = id;
        this.tencuc = tencuc;
    }

    public Cucdangkiem() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTencuc() {
        return tencuc;
    }

    public void setTencuc(String tencuc) {
        this.tencuc = tencuc;
    }
}
