export const mermaidStr = `graph TD;
    subgraph "Nodes"
        ros2_info_node["ros2_info_node"];
    end
    subgraph "Topics"
        _parameter_events(("/parameter_events<br>Type: rcl_interfaces/msg/ParameterEvent"));
    end
    ros2_info_node --> |Publishes| _parameter_events;
`;