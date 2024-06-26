package com.spring.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="SnippetData")
public class RegistrationEntity {
	@Column(name="UserName")
	private int UserName;
	@Column(name="Language")
	private String Language;
	@Column(name="stdin")
	private Date stdin;
	@Column(name="SourceCode")
	private String SourceCode;
	
	public RegistrationEntity() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public RegistrationEntity(int userName, String language, Date stdin, String sourceCode) {
		super();
		UserName = userName;
		Language = language;
		this.stdin = stdin;
		SourceCode = sourceCode;
	}

	@Override
	public String toString() {
		return "RegistrationEntity [UserName=" + UserName + ", Language=" + Language + ", stdin=" + stdin
				+ ", SourceCode=" + SourceCode + "]";
	}

	public int getUserName() {
		return UserName;
	}

	public void setUserName(int userName) {
		UserName = userName;
	}

	public String getLanguage() {
		return Language;
	}

	public void setLanguage(String language) {
		Language = language;
	}

	public Date getStdin() {
		return stdin;
	}

	public void setStdin(Date stdin) {
		this.stdin = stdin;
	}

	public String getSourceCode() {
		return SourceCode;
	}

	public void setSourceCode(String sourceCode) {
		SourceCode = sourceCode;
	}
	
	
	
	

}
