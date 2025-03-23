package com.example.The_Student_Voice_Backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/health")
public class HealthController {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping
    public ResponseEntity<Map<String, String>> healthCheck() {
        Map<String, String> response = new HashMap<>();
        response.put("status", "UP");
        response.put("application", "Running");
        
        try {
            jdbcTemplate.queryForObject("SELECT 1", Integer.class);
            response.put("database", "Connected");
        } catch (Exception e) {
            response.put("database", "Error: " + e.getMessage());
        }
        
        return ResponseEntity.ok(response);
    }
} 