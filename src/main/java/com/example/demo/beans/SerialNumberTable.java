package com.example.demo.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/*
Create table serial_number_table (
	id int(10),
	msisdn varchar(30),
	msisdnflag varchar(1),
	iccidvarchar(30),
	iccidflag varchar(1),
	router varchar(30),
	routerflag varchar(1),
	imei varchar(30),
	imeiflag varchar(1)
);
 */

@Entity
@Table(name = "serial_number_table")
public class SerialNumberTable {

	@Id
	@Column(name = "id")
	private int id;

	@Column(name = "msisdn")
	private String msisdn;

	@Column(name = "iccid")
	private String iccid;

	@Column(name = "router")
	private String router;

	@Column(name = "imei")
	private String imei;

	@Column(name = "msisdnflag")
	private String msisdnFlag;

	@Column(name = "iccidflag")
	private String iccidFlag;

	@Column(name = "routerflag")
	private String routerFLag;

	@Column(name = "imeiflag")
	private String imeiFlag;

	public SerialNumberTable(int id, String msisdn, String iccid, String router, String imei, String msisdnFlag,
			String iccidFlag, String routerFLag, String imeiFlag) {
		super();
		this.id = id;
		this.msisdn = msisdn;
		this.iccid = iccid;
		this.router = router;
		this.imei = imei;
		this.msisdnFlag = msisdnFlag;
		this.iccidFlag = iccidFlag;
		this.routerFLag = routerFLag;
		this.imeiFlag = imeiFlag;
	}

	public SerialNumberTable() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getMsisdn() {
		return msisdn;
	}

	public void setMsisdn(String msisdn) {
		this.msisdn = msisdn;
	}

	public String getIccid() {
		return iccid;
	}

	public void setIccid(String iccid) {
		this.iccid = iccid;
	}

	public String getRouter() {
		return router;
	}

	public void setRouter(String router) {
		this.router = router;
	}

	public String getImei() {
		return imei;
	}

	public void setImei(String imei) {
		this.imei = imei;
	}

	public String getMsisdnFlag() {
		return msisdnFlag;
	}

	public void setMsisdnFlag(String msisdnFlag) {
		this.msisdnFlag = msisdnFlag;
	}

	public String getIccidFlag() {
		return iccidFlag;
	}

	public void setIccidFlag(String iccidFlag) {
		this.iccidFlag = iccidFlag;
	}

	public String getRouterFLag() {
		return routerFLag;
	}

	public void setRouterFLag(String routerFLag) {
		this.routerFLag = routerFLag;
	}

	public String getImeiFlag() {
		return imeiFlag;
	}

	public void setImeiFlag(String imeiFlag) {
		this.imeiFlag = imeiFlag;
	}

	@Override
	public String toString() {
		return "SerialNumberTable [id=" + id + ", msisdn=" + msisdn + ", iccid=" + iccid + ", router=" + router
				+ ", imei=" + imei + ", msisdnFlag=" + msisdnFlag + ", iccidFlag=" + iccidFlag + ", routerFLag="
				+ routerFLag + ", imeiFlag=" + imeiFlag + "]";
	}

}
