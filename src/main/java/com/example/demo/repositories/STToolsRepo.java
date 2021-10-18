package com.example.demo.repositories;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.beans.SerialNumberTable;

public interface STToolsRepo extends JpaRepository<SerialNumberTable, Integer> {

	@Query(value="select * from serial_number_table where msisdnflag = 'Y' limit 1", nativeQuery=true)
	public SerialNumberTable findDataMsisdn();
	
	@Query(value="select * from serial_number_table where iccidflag = 'Y' limit 1", nativeQuery=true)
	public SerialNumberTable findDataIccid();
	
	@Query(value="select * from serial_number_table where routerflag = 'Y' limit 1", nativeQuery=true)
	public SerialNumberTable findDataRouter();
	
	@Query(value="select * from serial_number_table where imeiflag = 'Y' limit 1", nativeQuery=true)
	public SerialNumberTable findDataImei();
	
	@Transactional
	@Modifying
	@Query(value="update serial_number_table set msisdnflag = 'N' where id = ?1", nativeQuery=true)
	public void updateMsisdnflag(int id);
	
	@Transactional
	@Modifying
	@Query(value="update serial_number_table set iccidflag = 'N' where id = ?1", nativeQuery=true)
	public void updateIccidflag(int id);
	
	@Transactional
	@Modifying
	@Query(value="update serial_number_table set routerflag = 'N' where id = ?1", nativeQuery=true)
	public void updateRouterflag(int id);
	
	@Transactional
	@Modifying
	@Query(value="update serial_number_table set imeiflag = 'N' where id = ?1", nativeQuery=true)
	public void updateImeiflag(int id);
}
