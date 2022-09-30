package com.suntek.inventorymanager.repository.entity;

import com.suntek.inventorymanager.controller.dto.ItemDto;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "Items")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer idItems;
    @Column(name = "name")
    private String name;
    @Column(name = "description")
    private String description;
    @Column(name = "price")
    private BigDecimal price;
    @Column(name = "category")
    private String category;
    @Column(name = "imageUrl")
    private String imageUrl;

    public Item() {}
    public Item(ItemDto itemDto) {
        this.name = itemDto.getName();
        this.description = itemDto.getDescription();
//        this.price = BigDecimal.valueOf(Double.parseDouble(String.format("%.2f", itemDto.getPrice()))).setScale(2);
        this.price = new BigDecimal(String.format("%.2f", itemDto.getPrice())).setScale(2);
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
        return idItems;
    }

    public void setId(Integer id) {
        this.idItems = id;
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

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
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

    @Override
    public String toString() {
        return "Item{" +
                "idItems=" + idItems +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", category='" + category + '\'' +
                ", imageUrl='" + imageUrl + '\'' +
                '}';
    }
}
