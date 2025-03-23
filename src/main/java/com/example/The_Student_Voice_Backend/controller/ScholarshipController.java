package com.example.The_Student_Voice_Backend.controller;

import com.example.The_Student_Voice_Backend.model.Scholarship;
import com.example.The_Student_Voice_Backend.service.ScholarshipService;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/scholarships")
@CrossOrigin(origins = "*")
public class ScholarshipController {
    
    private static final Logger logger = LoggerFactory.getLogger(ScholarshipController.class);
    private final ScholarshipService scholarshipService;

    public ScholarshipController(ScholarshipService scholarshipService) {
        this.scholarshipService = scholarshipService;
    }

    // Basic CRUD Operations
    @GetMapping("/")
    public ResponseEntity<List<Scholarship>> getAllScholarships() {
        logger.info("Fetching all scholarships");
        return ResponseEntity.ok(scholarshipService.getAllScholarships());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Scholarship> getScholarshipById(@PathVariable Integer id) {
        logger.info("Fetching scholarship with id: {}", id);
        return ResponseEntity.ok(scholarshipService.getScholarshipById(id));
    }

    @PostMapping("/")
    public ResponseEntity<Scholarship> createScholarship(@Valid @RequestBody Scholarship scholarship) {
        logger.info("Creating new scholarship");
        return ResponseEntity.ok(scholarshipService.createScholarship(scholarship));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Scholarship> updateScholarship(
            @PathVariable Integer id,
            @Valid @RequestBody Scholarship scholarship) {
        logger.info("Updating scholarship with id: {}", id);
        return ResponseEntity.ok(scholarshipService.updateScholarship(id, scholarship));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteScholarship(@PathVariable Integer id) {
        logger.info("Deleting scholarship with id: {}", id);
        scholarshipService.deleteScholarship(id);
        return ResponseEntity.ok().build();
    }

    // Search Operations
    @GetMapping("/active")
    public ResponseEntity<List<Scholarship>> getActiveScholarships() {
        logger.info("Fetching active scholarships");
        return ResponseEntity.ok(scholarshipService.getActiveScholarships());
    }

    @GetMapping("/search/name")
    public ResponseEntity<List<Scholarship>> searchScholarshipsByName(
            @RequestParam(required = true) String name) {
        logger.info("Searching scholarships by name: {}", name);
        return ResponseEntity.ok(scholarshipService.searchScholarshipsByName(name));
    }

    @GetMapping("/type/{type}")
    public ResponseEntity<List<Scholarship>> getScholarshipsByType(@PathVariable String type) {
        logger.info("Fetching scholarships by type: {}", type);
        return ResponseEntity.ok(scholarshipService.getScholarshipsByType(type));
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<Scholarship>> getScholarshipsByCategory(@PathVariable String category) {
        logger.info("Fetching scholarships by category: {}", category);
        return ResponseEntity.ok(scholarshipService.getScholarshipsByCategory(category));
    }

    @GetMapping("/degree/{degree}")
    public ResponseEntity<List<Scholarship>> getScholarshipsByDegree(@PathVariable String degree) {
        logger.info("Fetching scholarships by degree: {}", degree);
        return ResponseEntity.ok(scholarshipService.getScholarshipsByDegree(degree));
    }

    @GetMapping("/gender/{gender}")
    public ResponseEntity<List<Scholarship>> getScholarshipsByGender(@PathVariable String gender) {
        logger.info("Fetching scholarships by gender: {}", gender);
        return ResponseEntity.ok(scholarshipService.getScholarshipsByGender(gender));
    }

    @GetMapping("/status/{status}")
    public ResponseEntity<List<Scholarship>> getScholarshipsByStatus(@PathVariable String status) {
        logger.info("Fetching scholarships by status: {}", status);
        return ResponseEntity.ok(scholarshipService.getScholarshipsByApplicationStatus(status));
    }

    @GetMapping("/income")
    public ResponseEntity<List<Scholarship>> getScholarshipsByIncomeLimit(
            @RequestParam(required = true) Integer income) {
        logger.info("Fetching scholarships by income limit: {}", income);
        return ResponseEntity.ok(scholarshipService.getScholarshipsByIncomeLimit(income));
    }

    @GetMapping("/popular")
    public ResponseEntity<List<Scholarship>> getPopularScholarships(
            @RequestParam(defaultValue = "0") Integer minPopularity) {
        logger.info("Fetching popular scholarships with minimum popularity: {}", minPopularity);
        return ResponseEntity.ok(scholarshipService.getPopularScholarships(minPopularity));
    }

    @GetMapping("/search/advanced")
    public ResponseEntity<List<Scholarship>> searchScholarships(
            @RequestParam(required = false) String type,
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String degree,
            @RequestParam(required = false) String gender,
            @RequestParam(required = false) Integer maxIncomeLimit) {
        logger.info("Performing advanced search with parameters: type={}, category={}, degree={}, gender={}, maxIncomeLimit={}",
                type, category, degree, gender, maxIncomeLimit);
        return ResponseEntity.ok(scholarshipService.searchScholarships(
                type, category, degree, gender, maxIncomeLimit));
    }
} 