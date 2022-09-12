package com.suntek.inventorymanager.service;

import com.suntek.inventorymanager.repository.entity.Item;

import java.util.List;

public interface ItemService {
    List<Item> getAllItems();
    Item getItemById(int id);
    Item getItemByName(String name);
    Item addItem(Item item);
    boolean removeItem(int id);
    Item updateItem(Item item);
}
