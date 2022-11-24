package com.example.Web3.model;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.query.Query;

import java.util.List;

public class PointResultDataAccessObject implements EntityDataAccessObject<Long, PointResult> {

    private SessionFactory sessionFactory;

    public PointResultDataAccessObject() {
        connect();
    }

    private void connect() {
        try {
            Configuration configuration = new Configuration().configure();
            configuration.addAnnotatedClass(PointResult.class);
            StandardServiceRegistryBuilder builder = new StandardServiceRegistryBuilder().applySettings(configuration.getProperties());
            sessionFactory = configuration.buildSessionFactory(builder.build());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public List<PointResult> getAll() {
        Query query = sessionFactory.openSession().createQuery("select p from " + PointResult.class.getSimpleName() + " p");
        return (List<PointResult>) query.getResultList();
    }

    @Override
    public boolean deleteAll() {
        List<PointResult> pointResultList = getAll();
        for (PointResult pointResult : pointResultList) {
            deleteEntity(pointResult);
        }
        return true;
    }

    @Override
    public boolean deleteEntity(PointResult pointResult) {
        try {
            Session session = sessionFactory.openSession();
            Transaction transaction = session.beginTransaction();
            session.delete(pointResult);
            transaction.commit();
            session.close();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public boolean insert(PointResult pointResult) {
        try {
            Session session = sessionFactory.openSession();
            Transaction transaction = session.beginTransaction();
            session.save(pointResult);
            transaction.commit();
            session.close();
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }

    @Override
    public PointResult update(PointResult pointResult) {
        try {
            Session session = sessionFactory.openSession();
            Transaction transaction = session.beginTransaction();
            session.update(pointResult);
            transaction.commit();
            session.close();
            return pointResult;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }
}
