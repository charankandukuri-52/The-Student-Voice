package com.example.The_Student_Voice_Backend.service;

import com.example.The_Student_Voice_Backend.model.Scholarship;
import com.example.The_Student_Voice_Backend.repository.ScholarshipRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service
@Transactional
public class ScholarshipService {

    private final ScholarshipRepository scholarshipRepository;

    public ScholarshipService(ScholarshipRepository scholarshipRepository) {
        this.scholarshipRepository = scholarshipRepository;
    }

    public List<Scholarship> getAllScholarships() {
        return scholarshipRepository.findAll();
    }

    public Scholarship getScholarshipById(Integer id) {
        return scholarshipRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Scholarship not found with id: " + id));
    }

    public List<Scholarship> getActiveScholarships() {
        return scholarshipRepository.findByDeadlineDateAfter(LocalDate.now());
    }

    public List<Scholarship> searchScholarshipsByName(String name) {
        return scholarshipRepository.findByNameContainingIgnoreCase(name);
    }

    public List<Scholarship> getScholarshipsByType(String type) {
        return scholarshipRepository.findByType(type);
    }

    public List<Scholarship> getScholarshipsByCategory(String category) {
        return scholarshipRepository.findByCategory(category);
    }

    public List<Scholarship> getScholarshipsByDegree(String degree) {
        return scholarshipRepository.findByDegree(degree);
    }

    public List<Scholarship> getScholarshipsByGender(String gender) {
        return scholarshipRepository.findByGender(gender);
    }

    public List<Scholarship> getScholarshipsByApplicationStatus(String status) {
        return scholarshipRepository.findByApplicationStatus(status);
    }

    public List<Scholarship> getScholarshipsByIncomeLimit(Integer income) {
        return scholarshipRepository.findByIncomeLimitGreaterThanEqual(income);
    }

    public List<Scholarship> getPopularScholarships(Integer minPopularity) {
        return scholarshipRepository.findPopularScholarships(minPopularity);
    }

    public List<Scholarship> searchScholarships(String type, String category, 
                                              String degree, String gender, 
                                              Integer maxIncomeLimit) {
        return scholarshipRepository.findByMultipleCriteria(type, category, degree, 
                                                          gender, maxIncomeLimit);
    }

    public Scholarship createScholarship(Scholarship scholarship) {
        return scholarshipRepository.save(scholarship);
    }

    public Scholarship updateScholarship(Integer id, Scholarship scholarship) {
        if (!scholarshipRepository.existsById(id)) {
            throw new EntityNotFoundException("Scholarship not found with id: " + id);
        }
        scholarship.setId(id);
        return scholarshipRepository.save(scholarship);
    }

    public void deleteScholarship(Integer id) {
        if (!scholarshipRepository.existsById(id)) {
            throw new EntityNotFoundException("Scholarship not found with id: " + id);
        }
        scholarshipRepository.deleteById(id);
    }
} 