import { Container, Text, VStack, Box, Heading } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom icon for bike pumps
const bikePumpIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [25, 25],
});

const bikePumps = [
  { id: 1, name: "Pump 1", position: [59.3293, 18.0686] },
  { id: 2, name: "Pump 2", position: [59.33258, 18.0649] },
  { id: 3, name: "Pump 3", position: [59.334591, 18.06324] },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="blue.500" w="100%" p={4} color="white">
        <Heading as="h1" size="lg">
          Bike Pumps in Stockholm
        </Heading>
      </Box>
      <Box w="100%" h="calc(100vh - 64px)">
        <MapContainer center={[59.3293, 18.0686]} zoom={13} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {bikePumps.map((pump) => (
            <Marker key={pump.id} position={pump.position} icon={bikePumpIcon}>
              <Popup>{pump.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </Box>
    </Container>
  );
};

export default Index;