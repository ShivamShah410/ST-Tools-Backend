package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.beans.SerialNumberTable;
import com.example.demo.services.STToolServices;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class STToolController {

	@Autowired
	STToolServices service;

	@GetMapping("/getdata/alldata")
	public List<SerialNumberTable> getData() {
		return service.getAllData();
	}

	@GetMapping("/getdata/msisdn")
	public SerialNumberTable getFirstRecordMsisdn() {
		return service.getFirstDataMsisdn();
	}

	@GetMapping("/getdata/iccid")
	public SerialNumberTable getFirstRecordIccid() {
		return service.getFirstDataIccid();
	}

	@GetMapping("/getdata/router")
	public SerialNumberTable getFirstRecordRouter() {
		return service.getFirstDataRouter();
	}

	@GetMapping("/getdata/imei")
	public SerialNumberTable getFirstRecordImei() {
		return service.getFirstDataImei();
	}

}
