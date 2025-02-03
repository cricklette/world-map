import { Component, AfterViewInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WorldbankService } from "../worldbank.service";
import { HttpClient } from "@angular/common/http";
import svgPanZoom from "svg-pan-zoom";



@Component({
  selector: 'app-world-map',
  standalone: true,
  imports: [CommonModule],
  // use svg as the template for this component
  templateUrl: '../../assets/map-image.svg',
  styleUrl: './world-map.component.css'
})
export class WorldMapComponent implements AfterViewInit {

  countryDataArray: any[] = []

  constructor(private worldbankService: WorldbankService) {}

  ngAfterViewInit() {
    // select map from DOM
    const svgMap = document.querySelector("svg");

    if (svgMap) {
      svgPanZoom(svgMap, {
        zoomEnabled: true,
        controlIconsEnabled: true,
        fit: true,
        center: true
      });
    }
    // query paths from svgMap
    const paths = svgMap?.getElementsByTagName("path");
    // if paths exists, make an array for each path
    if (paths) {
      Array.from(paths).forEach((path) => {
        // assign the country code by getting the value in id attribute
        const countryCode = path.getAttribute("id");
        document.addEventListener("click", () => {
          if (event?.target !== path) {
            path.classList.remove("selected");
            
          }
        });
        // F.1 Added Mouse Event handler 
        path.addEventListener("click", () => {
          path.classList.toggle("selected");
          if (countryCode) {
            this.worldbankService.getCountryByID(countryCode).subscribe({
              next: (countryData) => {
                console.log(countryData)

              },
            });
          }
        });
      });
    }
  }
}
