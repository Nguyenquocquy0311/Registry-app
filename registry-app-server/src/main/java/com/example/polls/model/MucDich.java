package com.example.polls.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "mucdich")
public class MucDich implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;

    @Column(name = "mucdich")
    private String mucdich;

    public MucDich() {
    }

    public MucDich(Integer id, String mucdich) {
        this.id = id;
        this.mucdich = mucdich;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getMucdich() {
        return mucdich;
    }

    public void setMucdich(String mucdich) {
        this.mucdich = mucdich;
    }
}
