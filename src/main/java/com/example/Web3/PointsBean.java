package com.example.Web3;

import com.example.Web3.controller.PointResultController;
import com.example.Web3.model.EntityDataAccessObject;
import com.example.Web3.model.PointResult;
import com.example.Web3.model.PointResultDataAccessObject;

import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import javax.faces.component.UIComponent;
import java.awt.event.InputEvent;
import java.util.ArrayList;
import java.util.List;

//@ManagedBean(name = "pointsBean", eager = true)
//@ApplicationScoped
public class PointsBean {
    private UIComponent errorWindow;

    private final PointResultController pointResultController = new PointResultController();
    private List<PointResult> pointResultList;
    private EntityDataAccessObject<Long, PointResult> dbManager = new PointResultDataAccessObject();

    private String y;
    private String x;
    private String xFromCanvas;

    private String yFromCanvas;

    private String r;

    private String rFromCanvas;

    public PointsBean() {
    }

    public void addResultFromCanvasToDB() {
        PointResult pointResult = pointResultController.createPointResult(xFromCanvas, yFromCanvas, rFromCanvas);
        dbManager.insert(pointResult);
        pointResultList.add(pointResult);
    }

    public void addResultToDB() {
        PointResult pointResult = pointResultController.createPointResult(x, y, r);
        dbManager.insert(pointResult);
        pointResultList.add(pointResult);
    }


    public void clearTable() {
        dbManager.deleteAll();
        pointResultList = new ArrayList<>();
    }


    public EntityDataAccessObject<Long, PointResult> getDbManager() {
        return dbManager;
    }

    public void setDbManager(EntityDataAccessObject<Long, PointResult> dbManager) {
        this.dbManager = dbManager;
    }

    public List<PointResult> getPointResultList() {
        if (pointResultList == null) {
            pointResultList = dbManager.getAll();
        }
        return pointResultList;
    }

    public UIComponent getErrorWindow() {
        return errorWindow;
    }

    public void setErrorWindow(UIComponent errorWindow) {
        this.errorWindow = errorWindow;
    }

    public String getX() {
        return x;
    }

    public void setX(String x) {
        this.x = x;
    }

    public String getY() {
        return y;
    }

    public void setY(String y) {
        this.y = y;
    }

    public String getR() {
        return r;
    }

    public void setR(String r) {
        this.r = r;
    }

    public String getyFromCanvas() {
        return yFromCanvas;
    }

    public void setyFromCanvas(String yFromCanvas) {
        this.yFromCanvas = yFromCanvas;
    }

    public String getxFromCanvas() {
        return xFromCanvas;
    }

    public void setxFromCanvas(String xFromCanvas) {
        this.xFromCanvas = xFromCanvas;
    }

    public String getrFromCanvas() {
        return rFromCanvas;
    }

    public void setrFromCanvas(String rFromCanvas) {
        this.rFromCanvas = rFromCanvas;
    }

//    public void onInput(InputEvent event) {
//        this.r = event.paramString();
//    }
}
