package com.suntek.inventorymanager.service;

import com.suntek.inventorymanager.repository.ItemRepository;
import com.suntek.inventorymanager.repository.entity.Item;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemServiceMySQL implements ItemService{
    private final ItemRepository itemRepository;
    public ItemServiceMySQL(@Autowired ItemRepository itemRepository) {
        this.itemRepository = itemRepository;
    }

    @Override
    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }

    @Override
    public Item getItemById(int id) {
        Optional<Item> itemOptional = itemRepository.findById(id);
        if (itemOptional.isPresent()) {
            Item item = itemOptional.get();
            return item;
        }
        else return null;
    }

    @Override
    public Item getItemByName(String name) {
        Optional<Item> itemOptional = itemRepository.findByName(name);
        if (itemOptional.isPresent()) {
            Item item = itemOptional.get();
            return item;
        }
        else return null;
    }

    @Override
    public Item addItem(Item item) {
        if (item.getName().isBlank() || item.getDescription() == null || item.getPrice().isNaN() || item.getCategory().isBlank() || item.getImageUrl() == null) {
            return null;
        }
        else {
            Item savingItem = itemRepository.save(item);
            return savingItem;
        }
    }

    @Override
    public boolean removeItem(int id) {
        Optional<Item> itemOptional = itemRepository.findById(id);
        if (itemOptional.isPresent()) {
            Item deletingItem = itemOptional.get();
            itemRepository.delete(deletingItem);
            return true;
        }
        else return false;
    }

    @Override
    public Item updateItem(Item item) {
        Optional<Item> itemOptional = itemRepository.findById(item.getId());
        if (itemOptional.isPresent()) {
            Item updatingItem = itemOptional.get();
            if (!item.getName().isBlank()) {
                updatingItem.setName(item.getName());
            }
            if (item.getDescription() != null) {
                updatingItem.setDescription(item.getDescription());
            }
            if (!item.getPrice().isNaN()) {
                updatingItem.setPrice(item.getPrice());
            }
            if (!item.getCategory().isBlank()) {
                updatingItem.setCategory(item.getCategory());
            }
            if (item.getImageUrl() != null) {
                updatingItem.setImageUrl(item.getImageUrl());
            }
            return updatingItem;
        }
        else return null;
    }


}
