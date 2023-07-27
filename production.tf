variable "ACCESS_KEY" {
  type = string
}

variable "SECRET_KEY" {
  type = string

}

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region     = "ap-south-1"
  access_key = var.ACCESS_KEY
  secret_key = var.SECRET_KEY
}

resource "aws_instance" "attendanceio-server" {
  ami           = "ami-0f5ee92e2d63afc18"
  instance_type = "t2.micro"
  tags = {
    Name = "attendanceio-server"
  }
}
