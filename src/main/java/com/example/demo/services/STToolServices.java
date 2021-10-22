package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import com.example.demo.beans.SerialNumberTable;
import com.example.demo.repositories.STToolsRepo;

@Component
@Service
public class STToolServices {

	@Autowired
	STToolsRepo repo;

	// Retrieving record for data
	public List<SerialNumberTable> getAllData() {
		return repo.findAll();
	}

	// specific record for msisdn
	public SerialNumberTable getFirstDataMsisdn() {
		SerialNumberTable out = repo.findDataMsisdn();
		repo.updateMsisdnflag(out.getId());
		return out;
	}

	// specific record for iccid
	public SerialNumberTable getFirstDataIccid() {
		SerialNumberTable out = repo.findDataIccid();
		repo.updateIccidflag(out.getId());
		return out;
	}

	// specific record for router
	public SerialNumberTable getFirstDataRouter() {
		SerialNumberTable out = repo.findDataRouter();
		repo.updateRouterflag(out.getId());
		return out;
	}

	// specific record for imei
	public SerialNumberTable getFirstDataImei() {
		SerialNumberTable out = repo.findDataImei();
		repo.updateImeiflag(out.getId());
		return out;
	}
	
	
	

}
