package com.example.The_Student_Voice_Backend.model;

import com.fasterxml.jackson.databind.JsonNode;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Table(name = "scholarships")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Scholarship {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    @NotBlank(message = "Name is required")
    @Column(nullable = false)
    private String name;
    
    @NotBlank(message = "Provider is required")
    @Column(nullable = false)
    private String provider;
    
    @NotBlank(message = "Type is required")
    @Column(nullable = false)
    private String type;
    
    @NotBlank(message = "Category is required")
    @Column(nullable = false)
    private String category;
    
    @NotBlank(message = "Degree is required")
    @Column(nullable = false)
    private String degree;
    
    @NotBlank(message = "Gender is required")
    @Column(nullable = false)
    private String gender;
    
    @Column(columnDefinition = "json")
    @JdbcTypeCode(SqlTypes.JSON)
    private JsonNode fieldOfStudy;
    
    @Column(columnDefinition = "json")
    @JdbcTypeCode(SqlTypes.JSON)
    private JsonNode eligibilityCriteria;
    
    @NotNull(message = "Amount is required")
    @Column(nullable = false)
    private String amount;
    
    @Column(columnDefinition = "json")
    @JdbcTypeCode(SqlTypes.JSON)
    private JsonNode amountRange;
    
    @NotNull(message = "Deadline is required")
    @Column(nullable = false)
    private LocalDate deadline;
    
    @Column(name = "deadline_date")
    private LocalDate deadlineDate;
    
    @Column(columnDefinition = "json")
    @JdbcTypeCode(SqlTypes.JSON)
    private JsonNode requiredDocuments;
    
    @Column(name = "application_link")
    private String applicationLink;
    
    @Column(columnDefinition = "json")
    @JdbcTypeCode(SqlTypes.JSON)
    private JsonNode location;
    
    @Column(name = "financial_aid_type", columnDefinition = "json")
    @JdbcTypeCode(SqlTypes.JSON)
    private JsonNode financialAidType;
    
    @Column(columnDefinition = "json")
    @JdbcTypeCode(SqlTypes.JSON)
    private JsonNode tags;
    
    @Column(name = "application_status")
    private String applicationStatus;
    
    @NotNull(message = "Popularity is required")
    @Column(nullable = false)
    private Integer popularity;
    
    @Column(name = "income_limit")
    private Integer incomeLimit;
    
    @Column(name = "institute_type", columnDefinition = "json")
    @JdbcTypeCode(SqlTypes.JSON)
    private JsonNode instituteType;
    
    @Column(name = "created_at", updatable = false)
    private LocalDate createdAt;
    
    @Column(name = "updated_at")
    private LocalDate updatedAt;
    
    @PrePersist
    protected void onCreate() {
        createdAt = LocalDate.now();
        updatedAt = LocalDate.now();
    }
    
    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDate.now();
    }
} 