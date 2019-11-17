import { Module } from "../ioc";
import { ConnectionService, TransactionService } from "./orm";
import { PondService } from "./PondService";
import { TreatmentService } from "./TreatmentService";
import { DiseaseService } from "./DiseaseService";
import { VarietyService } from "./VarietyService";
import { FishService } from "./FishService";
import { MeasurementService } from "./MeasurementService";
import { ImageService } from "./ImageService";

@Module({
  name: "storage",
  services: [
    ConnectionService,
    TransactionService,
    PondService,
    MeasurementService,
    TreatmentService,
    DiseaseService,
    VarietyService,
    FishService,
    ImageService
  ]
})
export class StorageModule {}
