package com.example.Web3.model;

import java.util.List;

public interface EntityDataAccessObject<Key, Entity> {
    List<Entity> getAll();

    boolean deleteAll();

    boolean deleteEntity(Entity entity);

    boolean insert(Entity entity);

    Entity update(Entity entity);
}
