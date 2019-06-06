export default function readingsOutsideRange(station, range) {
    return station.readings
                  .filter(reading => range.isOutside(reading.temp));
}