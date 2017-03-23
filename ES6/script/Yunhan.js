
"use strict";

function Yunhan(){
	this.Sibling = new Set();
	this.Friend = new Set();
	this.Parent = new Set();
	this.Grandparent = new Set();
	var signature  = "";
	function inSetSignature (){
		console.log("Set Signature Success");
		console.log("Signature: " + signature);
	};
	this.outSetSignature = function(value){
		setTimeout(function(){
			signature = value;
			return inSetSignature();
		}, 1000);
	};
	function inGetSignature (){
		console.log("Signature: " + signature);
	};
	this.outGetSignature = function(value){
		signature = value;
		return inGetSignature();
	};
	Object.freeze(this);
}

Yunhan.prototype = {
	constructor : Yunhan,
	girlfriend : "My Beauty",
	getRelationship : function (target = "all"){
		if (target == "sibling" || target == "Sibling") {
			console.log("Sibling: ");
			for (var value of Array.from(this.Sibling)) {
				console.log(value);
			};
		} else if (target == "friend" || target == "Friend") {
			console.log("Friend: ");
			for (var value of Array.from(this.Friend)) {
				console.log(value);
			};
		} else if (target == "parent" || target == "Parent") {
			console.log("Parent: ");
			for (var value of Array.from(this.Parent)) {
				console.log(value);
			};
		} else if (target == "grandparent" || target == "Grandparent") {
			console.log("Grandparent: ");
			for (var value of Array.from(this.Grandparent)) {
				console.log(value);
			};
		} else if (target == "all" || target == "All") {
			console.log("Sibling: ");
			for (var value of Array.from(this.Sibling)) {
				console.log(value);
			};
			console.log("Friend: ");
			for (var value of Array.from(this.Friend)) {
				console.log(value);
			};
			console.log("Parent: ");
			for (var value of Array.from(this.Parent)) {
				console.log(value);
			};
			console.log("Grandparent: ");
			for (var value of Array.from(this.Grandparent)) {
				console.log(value);
			};
		} else {
			console.log("Wrong direct");
			return;
		};
	},
	addPerson : function (target,person){
		if (this.checkPerson(person) != true) {
			if (target == "sibling" || target == "Sibling")
			{
				this.Sibling.add(person);
				console.log("Add Success");
				this.getRelationship(target);
			}
			else if (target == "friend" || target == "Friend")
			{
				this.Friend.add(person);
				console.log("Add Success");
				this.getRelationship(target);
			}
			else if (target == "parent" || target == "Parent")
			{
				this.Parent.add(person);
				console.log("Add Success");
				this.getRelationship(target);
			}
			else if (target == "grandparent" || target == "Grandparent")
			{
				this.Grandparent.add(person);
				console.log("Add Success");
				this.getRelationship(target);
			}
		} else {
			console.log(person + " Already Exist");
		};
	},
	deletePerson : function (person){
		if (this.checkPerson(person) == true) {
			this.Sibling.delete(person);
			this.Friend.delete(person);
			this.Parent.delete(person);
			this.Grandparent.delete(person);
			console.log("Delete All Data Of " + person);
		} else {
			console.log(person + " Not Exist");
		}
	},
	updataPerson : function (target,person){
		if (this.checkPerson(person) == true) {
			this.deletePerson(person);
			this.addPerson(target,person);
			console.log("Updata Success");
		} else {
			console.log("Updata Fail");
		}
	},
	checkPerson : function (person){
		for (var value of Array.from(this.Sibling)) {
			if (value == person) {
				return true;
			} else {
				return false;
			}
		};
		for (var value of Array.from(this.Friend)) {
			if (value == person) {
				return true;
			} else {
				return false;
			}
		};
		for (var value of Array.from(this.Parent)) {
			if (value == person) {
				return true;
			} else {
				return false;
			}
		};
		for (var value of Array.from(this.Grandparent)) {
			if (value == person) {
				return true;
			} else {
				return false;
			}
		};
	}
}