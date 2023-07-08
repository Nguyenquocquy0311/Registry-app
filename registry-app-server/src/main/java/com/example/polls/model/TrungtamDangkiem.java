package com.example.polls.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "trungtamdangkiem")
public class TrungtamDangkiem implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;

    @Column(name = "tentrungtam")
    private String tentrungtam;

    @JoinColumn(name = "id_cucdangkiem", referencedColumnName = "id")
    @ManyToOne
    private Cucdangkiem idcucdangkiem;

    public TrungtamDangkiem() {
    }

    public TrungtamDangkiem(Integer id, String tentrungtam, Cucdangkiem idcucdangkiem) {
        this.id = id;
        this.tentrungtam = tentrungtam;
        this.idcucdangkiem = idcucdangkiem;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTentrungtam() {
        return tentrungtam;
    }

    public void setTentrungtam(String tentrungtam) {
        this.tentrungtam = tentrungtam;
    }

    public Cucdangkiem getIdcucdangkiem() {
        return idcucdangkiem;
    }

    public void setIdcucdangkiem(Cucdangkiem idcucdangkiem) {
        this.idcucdangkiem = idcucdangkiem;
    }
}
