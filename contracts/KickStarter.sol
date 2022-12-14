// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract KickStarter {
    uint256 public totalProjects;

    struct Projects {
        string projectName;
        uint256 projectId;
        uint256 fundGoal;
        address payable creator;
        bool finished;
    }

    // Keeps track of projectId => data type Items
    mapping(uint256 => Projects) public projects;

    mapping(address => uint256) public crowdEarning;

    function createProject(
        string memory _projectName,
        uint256 _fundGoal
    ) public {
        totalProjects++;
        projects[totalProjects] = Projects(
            _projectName,
            totalProjects,
            _fundGoal,
            payable(msg.sender),
            false
        );
    }
}
