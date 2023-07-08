package com.example.polls.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "thongtindangkiem")
public class ThongTinDangKiem  implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;

    @Column(name = "maso")
    private String maso;

    @Column(name = "ngaycap")
    @Temporal(TemporalType.DATE)
    private Date ngaycap;

    @Column(name = "ngayhethan")
    @Temporal(TemporalType.DATE)
    private Date ngayhethan;

    @JoinColumn(name = "id_xe", referencedColumnName = "id")
    @ManyToOne
    private Xe xe;

    @JoinColumn(name = "id_trungtamdangkiem", referencedColumnName = "id")
    @ManyToOne
    private TrungtamDangkiem trungtamDangkiem;

    public ThongTinDangKiem() {
    }

    public ThongTinDangKiem(Integer id, String maso, Date ngaycap, Date ngayhethan, Xe xe, TrungtamDangkiem trungtamDangkiem) {
        this.id = id;
        this.maso = maso;
        this.ngaycap = ngaycap;
        this.ngayhethan = ngayhethan;
        this.xe = xe;
        this.trungtamDangkiem = trungtamDangkiem;
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

    public Date getNgaycap() {
        return ngaycap;
    }

    public void setNgaycap(Date ngaycap) {
        this.ngaycap = ngaycap;
    }

    public Date getNgayhethan() {
        return ngayhethan;
    }

    public void setNgayhethan(Date ngayhethan) {
        this.ngayhethan = ngayhethan;
    }

    public Xe getXe() {
        return xe;
    }

    public void setXe(Xe xe) {
        this.xe = xe;
    }

    public TrungtamDangkiem getTrungtamDangkiem() {
        return trungtamDangkiem;
    }

    public void setTrungtamDangkiem(TrungtamDangkiem trungtamDangkiem) {
        this.trungtamDangkiem = trungtamDangkiem;
    }
}
