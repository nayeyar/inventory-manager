package com.suntek.inventorymanager.controller;

import com.suntek.inventorymanager.controller.dto.ItemDto;
import com.suntek.inventorymanager.repository.entity.Item;
import com.suntek.inventorymanager.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/item")
public class ItemController {
//    final ItemRepository itemRepository;
//
//    public ItemController(@Autowired ItemRepository itemRepository) {
//        this.itemRepository = itemRepository;
//    }

    // DependencyInjectionPoint Constructor
    final ItemService itemService;
    public ItemController(@Autowired ItemService itemService) {
        this.itemService = itemService;
    }

    @GetMapping("/all")
    public Iterable<Item> getItems() {
        return itemService.getAllItems();
    }

    @GetMapping("/{id}")
    public Item getItemById(@PathVariable("id") Integer id) {
        return itemService.getItemById(id);
    }

    @PostMapping
    public Item addItem(@RequestBody ItemDto itemDto) {
        return itemService.addItem(new Item(itemDto));
    }

    @DeleteMapping("/{id}")
    public boolean deleteItem(@PathVariable("id") Integer id) {
        return itemService.removeItem(id);
    }

    @PutMapping
    public Item updateItem(@RequestBody ItemDto itemDto) {
        return itemService.updateItem(new Item(itemDto));
    }

}
