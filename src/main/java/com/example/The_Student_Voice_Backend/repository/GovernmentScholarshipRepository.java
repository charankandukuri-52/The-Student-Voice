package com.example.The_Student_Voice_Backend.repository;

import com.example.The_Student_Voice_Backend.model.GovernmentScholarship;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface  GovernmentScholarshipRepository extends JpaRepository<GovernmentScholarship, Integer> {
    
    List<GovernmentScholarship> findByNameContainingIgnoreCase(String name);
    
    List<GovernmentScholarship> findByType(String type);
    
    List<GovernmentScholarship> findByCategory(String category);
    
    List<GovernmentScholarship> findByDegree(String degree);
    
    List<GovernmentScholarship> findByGender(String gender);
    
    List<GovernmentScholarship> findByDeadlineDateAfter(LocalDate date);
    
    List<GovernmentScholarship> findByApplicationStatus(String status);
    
    @Query("SELECT s FROM GovernmentScholarship s WHERE s.incomeLimit >= :income")
    List<GovernmentScholarship> findByIncomeLimitGreaterThanEqual(@Param("income") Integer income);
    
    @Query("SELECT s FROM GovernmentScholarship s WHERE s.popularity >= :minPopularity ORDER BY s.popularity DESC")
    List<GovernmentScholarship> findPopularScholarships(@Param("minPopularity") Integer minPopularity);
} 