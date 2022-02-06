package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.beans.SerialNumberTable;
import com.example.demo.services.STToolServices;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/stapp/getdata")
public class STToolController {

	@Autowired
	STToolServices service;

	@GetMapping("/alldata")
	public List<SerialNumberTable> getData() {
		return service.getAllData();
	}

	@GetMapping("/msisdn")
	public SerialNumberTable getFirstRecordMsisdn() {
		return service.getFirstDataMsisdn();
	}

	@GetMapping("/iccid")
	public SerialNumberTable getFirstRecordIccid() {
		return service.getFirstDataIccid();
	}

	@GetMapping("/router")
	public SerialNumberTable getFirstRecordRouter() {
		return service.getFirstDataRouter();
	}

	@GetMapping("/imei")
	public SerialNumberTable getFirstRecordImei() {
		return service.getFirstDataImei();
	}

}
