import os
liste = [
  {
    "baslik": "Azure Fundamentals",
    "key": "azure-fundamentals"
  },
  {
    "baslik": "Azure Account",
    "key": "azure-account"
  },
  {
    "baslik": "Digital Transormation",
    "key": "digital-transormation"
  },
  {
    "baslik": "Cloud Concepts",
    "key": "cloud-concepts"
  },
  {
    "baslik": "Economies fo Scale",
    "key": "economies-fo-scale"
  },
  {
    "baslik": "Type of Cloud Models",
    "key": "type-of-cloud-models"
  },
  {
    "baslik": "Type of Cloud Services",
    "key": "type-of-cloud-services"
  },
  {
    "baslik": "Regions Availability",
    "key": "regions-availability"
  },
  {
    "baslik": "Resource Groups",
    "key": "resource-groups"
  },
  {
    "baslik": "Azure Managements",
    "key": "azure-managements"
  },
  {
    "baslik": "Azure IoT Hub",
    "key": "azure-iot-hub"
  },
  {
    "baslik": "Azure Network Services",
    "key": "azure-network-services"
  },
  {
    "baslik": "Azure Storage Account",
    "key": "azure-storage-account"
  },
  {
    "baslik": "Azure SQLDB",
    "key": "azure-sqldb"
  },
  {
    "baslik": "Azure Pricing Calculator",
    "key": "azure-pricing-calculator"
  }
]

for i in liste:
    yer = i["key"]
    os.mkdir(yer)
    yer = yer+"/README.md"
    with open(yer, "a") as f:
        f.write("# "+i["baslik"])

for i in liste:
    with open("README.md", "a") as f:
        satir = "- [{}]({}/)\n".format(i["baslik"],i["key"])
        f.write(satir)
