package com.EmployeeSys.employee.service;

import com.EmployeeSys.employee.entity.Employee;
import com.EmployeeSys.employee.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public Employee postEmployee(Employee employee){
        return employeeRepository.save(employee);
    }
}
