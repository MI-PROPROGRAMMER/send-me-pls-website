import { Phone, MapPin, Clock } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-gradient-secondary text-secondary-foreground py-3 shadow-glow">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm font-medium">
          <div className="flex items-center gap-2">
            <Phone size={16} className="flex-shrink-0" />
            <span>+27 78 543 9511</span>
          </div>
          <div className="flex items-center gap-2 text-center">
            <MapPin size={16} className="flex-shrink-0" />
            <span>36 Sibaya Street, Somerset West, Western Cape 7130</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={16} className="flex-shrink-0" />
            <span>Mon-Sun: 9:00 - 23:00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
