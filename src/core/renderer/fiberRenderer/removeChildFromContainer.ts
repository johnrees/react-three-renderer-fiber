import getDescriptorForInstance from "../utils/getDescriptorForInstance";

export default function removeChildFromContainer(container: any, child: any): void {
  getDescriptorForInstance(child).willBeRemovedFromContainer(child, container);
}
