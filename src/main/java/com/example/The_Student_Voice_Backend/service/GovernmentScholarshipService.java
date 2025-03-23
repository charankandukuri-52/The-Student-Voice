package com.example.The_Student_Voice_Backend.service;

import com.example.The_Student_Voice_Backend.model.GovernmentScholarship;
import com.example.The_Student_Voice_Backend.repository.GovernmentScholarshipRepository;
import jakarta.persistence.EntityNotFoundException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service
@Transactional
public class GovernmentScholarshipService {

    private static final Logger logger = LoggerFactory.getLogger(GovernmentScholarshipService.class);
    private final GovernmentScholarshipRepository scholarshipRepository;

    @Autowired
    public GovernmentScholarshipService(GovernmentScholarshipRepository scholarshipRepository) {
        this.scholarshipRepository = scholarshipRepository;
        logger.info("GovernmentScholarshipService initialized");
    }

    public List<GovernmentScholarship> getAllScholarships() {
        logger.debug("Fetching all scholarships");
        return scholarshipRepository.findAll();
    }

    public GovernmentScholarship getScholarshipById(Integer id) {
        logger.debug("Fetching scholarship with id: {}", id);
        return scholarshipRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Scholarship not found with id: " + id));
    }

    public List<GovernmentScholarship> searchScholarships(String name) {
        logger.debug("Searching scholarships with name containing: {}", name);
        return scholarshipRepository.findByNameContainingIgnoreCase(name);
    }

    public List<GovernmentScholarship> getScholarshipsByType(String type) {
        logger.debug("Fetching scholarships of type: {}", type);
        return scholarshipRepository.findByType(type);
    }

    public List<GovernmentScholarship> getActiveScholarships() {
        logger.debug("Fetching active scholarships");
        return scholarshipRepository.findByDeadlineDateAfter(LocalDate.now());
    }

    public List<GovernmentScholarship> getScholarshipsByCategory(String category) {
        logger.debug("Fetching scholarships by category: {}", category);
        return scholarshipRepository.findByCategory(category);
    }

    public List<GovernmentScholarship> getScholarshipsByDegree(String degree) {
        logger.debug("Fetching scholarships by degree: {}", degree);
        return scholarshipRepository.findByDegree(degree);
    }

    public List<GovernmentScholarship> getScholarshipsByGender(String gender) {
        logger.debug("Fetching scholarships by gender: {}", gender);
        return scholarshipRepository.findByGender(gender);
    }

    public List<GovernmentScholarship> getScholarshipsByStatus(String status) {
        logger.debug("Fetching scholarships by status: {}", status);
        return scholarshipRepository.findByApplicationStatus(status);
    }

    public List<GovernmentScholarship> getScholarshipsByIncomeLimit(Integer minIncome) {
        logger.debug("Fetching scholarships with minimum income: {}", minIncome);
        return scholarshipRepository.findByIncomeLimitGreaterThanEqual(minIncome);
    }

    public List<GovernmentScholarship> getPopularScholarships(Integer minPopularity) {
        logger.debug("Fetching popular scholarships with minimum popularity: {}", minPopularity);
        return scholarshipRepository.findPopularScholarships(minPopularity);
    }
} 