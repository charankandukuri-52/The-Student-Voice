package com.example.The_Student_Voice_Backend.controller;

import com.example.The_Student_Voice_Backend.model.GovernmentScholarship;
import com.example.The_Student_Voice_Backend.service.GovernmentScholarshipService;
import com.example.The_Student_Voice_Backend.dto.ApiResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/government-scholarships")
@CrossOrigin(origins = "${cors.allowed-origins:*}")
@Tag(name = "Government Scholarships", description = "Government Scholarships management APIs")
@Validated
public class GovernmentScholarshipController extends BaseController {

    private static final String LOG_REQUEST_PATTERN = "GET request received for {}";
    private static final int MIN_SEARCH_LENGTH = 2;
    private static final int MAX_SEARCH_LENGTH = 100;
    
    private final GovernmentScholarshipService scholarshipService;

    public GovernmentScholarshipController(GovernmentScholarshipService scholarshipService) {
        this.scholarshipService = scholarshipService;
        log.info("GovernmentScholarshipController initialized");
    }

    @Operation(summary = "Get all scholarships")
    @GetMapping
    public ResponseEntity<ApiResponse<List<GovernmentScholarship>>> getAllScholarships() {
        log.info(LOG_REQUEST_PATTERN, "all scholarships");
        return successResponse(scholarshipService.getAllScholarships());
    }

    @Operation(summary = "Get scholarship by ID")
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<GovernmentScholarship>> getScholarshipById(
            @Parameter(description = "Scholarship ID") 
            @PathVariable @Min(1) Integer id) {
        log.info(LOG_REQUEST_PATTERN, "scholarship with id: " + id);
        return successResponse(scholarshipService.getScholarshipById(id));
    }

    @Operation(summary = "Search scholarships by name")
    @GetMapping("/search")
    public ResponseEntity<ApiResponse<List<GovernmentScholarship>>> searchScholarships(
            @Parameter(description = "Name to search") 
            @RequestParam @NotBlank @Size(min = MIN_SEARCH_LENGTH, max = MAX_SEARCH_LENGTH) String name) {
        log.info(LOG_REQUEST_PATTERN, "search scholarships with name: " + name);
        return successResponse(scholarshipService.searchScholarships(name));
    }

    @Operation(summary = "Get scholarships by type")
    @GetMapping("/type/{type}")
    public ResponseEntity<ApiResponse<List<GovernmentScholarship>>> getScholarshipsByType(
            @Parameter(description = "Scholarship type") 
            @PathVariable @NotBlank String type) {
        log.info(LOG_REQUEST_PATTERN, "scholarships of type: " + type);
        return successResponse(scholarshipService.getScholarshipsByType(type));
    }

    @Operation(summary = "Get scholarships by category")
    @GetMapping("/category/{category}")
    public ResponseEntity<ApiResponse<List<GovernmentScholarship>>> getScholarshipsByCategory(
            @Parameter(description = "Scholarship category") 
            @PathVariable @NotBlank String category) {
        log.info(LOG_REQUEST_PATTERN, "scholarships in category: " + category);
        return successResponse(scholarshipService.getScholarshipsByCategory(category));
    }

    @Operation(summary = "Get scholarships by degree")
    @GetMapping("/degree/{degree}")
    public ResponseEntity<ApiResponse<List<GovernmentScholarship>>> getScholarshipsByDegree(
            @Parameter(description = "Degree type") 
            @PathVariable @NotBlank String degree) {
        log.info(LOG_REQUEST_PATTERN, "scholarships of degree: " + degree);
        return successResponse(scholarshipService.getScholarshipsByDegree(degree));
    }

    @Operation(summary = "Get scholarships by gender")
    @GetMapping("/gender/{gender}")
    public ResponseEntity<ApiResponse<List<GovernmentScholarship>>> getScholarshipsByGender(
            @Parameter(description = "Gender specification") 
            @PathVariable @NotBlank String gender) {
        log.info(LOG_REQUEST_PATTERN, "scholarships for gender: " + gender);
        return successResponse(scholarshipService.getScholarshipsByGender(gender));
    }

    @Operation(summary = "Get active scholarships")
    @GetMapping("/active")
    public ResponseEntity<ApiResponse<List<GovernmentScholarship>>> getActiveScholarships() {
        log.info(LOG_REQUEST_PATTERN, "active scholarships");
        return successResponse(scholarshipService.getActiveScholarships());
    }

    @Operation(summary = "Get scholarships by status")
    @GetMapping("/status/{status}")
    public ResponseEntity<ApiResponse<List<GovernmentScholarship>>> getScholarshipsByStatus(
            @Parameter(description = "Application status") 
            @PathVariable @NotBlank String status) {
        log.info(LOG_REQUEST_PATTERN, "scholarships with status: " + status);
        return successResponse(scholarshipService.getScholarshipsByStatus(status));
    }

    @Operation(summary = "Get scholarships by income limit")
    @GetMapping("/income")
    public ResponseEntity<ApiResponse<List<GovernmentScholarship>>> getScholarshipsByIncomeLimit(
            @Parameter(description = "Minimum income") 
            @RequestParam @Min(0) Integer minIncome) {
        log.info(LOG_REQUEST_PATTERN, "scholarships with minimum income: " + minIncome);
        return successResponse(scholarshipService.getScholarshipsByIncomeLimit(minIncome));
    }

    @Operation(summary = "Get popular scholarships")
    @GetMapping("/popular")
    public ResponseEntity<ApiResponse<List<GovernmentScholarship>>> getPopularScholarships(
            @Parameter(description = "Minimum popularity score") 
            @RequestParam(defaultValue = "0") @Min(0) Integer minPopularity) {
        log.info(LOG_REQUEST_PATTERN, "popular scholarships with minimum popularity: " + minPopularity);
        return successResponse(scholarshipService.getPopularScholarships(minPopularity));
    }
} 