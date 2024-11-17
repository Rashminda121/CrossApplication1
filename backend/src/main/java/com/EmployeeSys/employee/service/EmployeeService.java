package com.EmployeeSys.employee.service;

import com.EmployeeSys.employee.entity.Employee;
import com.EmployeeSys.employee.repository.EmployeeRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public Employee postEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

    public List<Employee> getAllEmployee(){
        return employeeRepository.findAll();
    }

    public void deleteEmployee(Long id){
        if(!employeeRepository.existsById(id)){
            throw new EntityNotFoundException("Employee "+id+" not found!");
        }

        employeeRepository.deleteById(id);

    }

    public Employee getEmployeeById(Long id){
        return employeeRepository.findById(id).orElse(null);
    }


}
