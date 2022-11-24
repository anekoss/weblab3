package com.example.Web3.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name = "points_results")
public class PointResult implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "x")
    private double x;
    @Column(name = "y")
    private double y;
    @Column(name = "r")
    private double r;
    @Column(name = "time")
    private String time;
    @Column(name = "valid")
    private boolean valid;
    @Column(name = "hit")
    private boolean hit;

    public PointResult() {
    }

    public PointResult(double x, double y, double r, String time, boolean valid, boolean hit) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.time = time;
        this.valid = valid;
        this.hit = hit;
    }

    public double getX() {
        return x;
    }

    public void setX(double x) {
        this.x = x;
    }

    public double getY() {
        return y;
    }

    public void setY(double y) {
        this.y = y;
    }

    public double getR() {
        return r;
    }

    public void setR(double r) {
        this.r = r;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public boolean isValid() {
        return valid;
    }

    public void setValid(boolean valid) {
        this.valid = valid;
    }

    public boolean isHit() {
        return hit;
    }

    public void setHit(boolean hit) {
        this.hit = hit;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        PointResult that = (PointResult) o;
        return Double.compare(that.x, x) == 0 && y == that.y && Double.compare(that.r, r) == 0 && valid == that.valid && hit == that.hit && Objects.equals(time, that.time);
    }

    @Override
    public int hashCode() {
        return Objects.hash(x, y, r, time, valid, hit);
    }

    @Override
    public String toString() {
        return "PointResult{" +
                "x=" + x +
                ", y=" + y +
                ", r=" + r +
                ", time='" + time + '\'' +
                ", valid=" + valid +
                ", hit=" + hit +
                '}';
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
