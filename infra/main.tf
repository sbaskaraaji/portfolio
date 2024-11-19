   provider "kubernetes" {
     config_path = "~/.kube/config"
   }

   resource "kubernetes_deployment" "portfolio" {
     metadata {
       name = "portfolio"
     }
     spec {
       replicas = 2
       selector {
         match_labels = {
           app = "portfolio"
         }
       }
       template {
         metadata {
           labels = {
             app = "portfolio"
           }
         }
         spec {
           container {
             image = "portfolio-app:latest"
             name  = "portfolio"
             ports {
               container_port = 3000
             }
           }
         }
       }
     }
   }
