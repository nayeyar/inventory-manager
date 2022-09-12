package com.suntek.inventorymanager.repository.entity;

import com.suntek.inventorymanager.controller.dto.ItemDto;

import javax.persistence.*;

@Entity
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    @Column(name = "name")
    private String name;
    @Column(name = "description")
    private String description;
    @Column(name = "price")
    private Double price;
    @Column(name = "category")
    private String category;
    @Column(name = "imageUrl")
    private String imageUrl;

    public Item() {

    }
    public Item(ItemDto itemDto) {
        this.name = itemDto.getName();
        this.description = itemDto.getDescription();
        this.price = itemDto.getPrice();
        this.category = itemDto.getCategory();
        this.imageUrl = itemDto.getImageUrl();
    }

//    public Item(String name, String description, Double price, String category, String imageUrl) {
//        this.name = name;
//        this.description = description;
//        this.price = price;
//        this.category = category;
//        this.imageUrl = imageUrl;
//    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
