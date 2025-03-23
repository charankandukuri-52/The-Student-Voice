package com.example.The_Student_Voice_Backend.repository;

import com.example.The_Student_Voice_Backend.model.Scholarship;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface ScholarshipRepository extends JpaRepository<Scholarship, Integer> {
    
    List<Scholarship> findByDeadlineDateAfter(LocalDate date);
    
    List<Scholarship> findByNameContainingIgnoreCase(String name);
    
    List<Scholarship> findByType(String type);
    
    List<Scholarship> findByCategory(String category);
    
    List<Scholarship> findByDegree(String degree);
    
    List<Scholarship> findByGender(String gender);
    
    List<Scholarship> findByApplicationStatus(String status);
    
    @Query("SELECT s FROM Scholarship s WHERE s.incomeLimit >= :income")
    List<Scholarship> findByIncomeLimitGreaterThanEqual(@Param("income") Integer income);
    
    @Query("SELECT s FROM Scholarship s WHERE s.popularity >= :minPopularity ORDER BY s.popularity DESC")
    List<Scholarship> findPopularScholarships(@Param("minPopularity") Integer minPopularity);
    
    // Advanced search with multiple criteria
    @Query("SELECT s FROM Scholarship s WHERE " +
           "(:type IS NULL OR s.type = :type) AND " +
           "(:category IS NULL OR s.category = :category) AND " +
           "(:degree IS NULL OR s.degree = :degree) AND " +
           "(:gender IS NULL OR s.gender = :gender) AND " +
           "(:maxIncomeLimit IS NULL OR s.incomeLimit <= :maxIncomeLimit)")
    List<Scholarship> findByMultipleCriteria(
            @Param("type") String type,
            @Param("category") String category,
            @Param("degree") String degree,
            @Param("gender") String gender,
            @Param("maxIncomeLimit") Integer maxIncomeLimit);
} 